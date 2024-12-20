import { Node, Project, SyntaxKind } from "ts-morph";

const removedFeatureName = process.argv[2]; // example isArticleEnabled
const featureState = process.argv[3]; //example off/on

const project = new Project({});

if (!removedFeatureName) {
  throw new Error('Укажите название флага');
}

if (!featureState) {
  throw new Error('Укажите состояние фичи (on/off)')
}

if (featureState !== 'on' && featureState !== 'off') {
  throw new Error('Некорректное значение состояния фичи (on или off)')
}

project.addSourceFilesAtPaths('src/**/ArticleDetailsPage.tsx');
// TODO
// project.addSourceFilesAtPaths('src/**/*.ts');
// project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const isToggleFunction = (node: Node) => {
  let isToggleFeatures = false;
  node.forEachChild(child => {
    if (
      child.isKind(SyntaxKind.Identifier) && 
      child.getText() === 'toggleFeatures'
    ) {
      isToggleFeatures = true;
    }
  });

  return isToggleFeatures;
}

files.forEach((sourceFile) => {
  sourceFile.forEachDescendant(node => {
    if(node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      const objectOptions = node.getFirstDescendantByKind(
        SyntaxKind.ObjectLiteralExpression
      );

      if (!objectOptions) return;

      const offFunctionProperty = objectOptions?.getProperty('off');
      const onFunctionProperty = objectOptions?.getProperty('on');
      const featureNameProperty = objectOptions?.getProperty('name');

      const onFunction = onFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
      const offFunction = offFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
      const featureName = featureNameProperty?.getFirstDescendantByKind(SyntaxKind.StringLiteral)?.getText().slice(1, -1);

      if(featureName !== removedFeatureName) return;

      if(featureState === 'off') {
        node.replaceWithText(offFunction?.getBody().getText() ?? "");
      }

      if (featureState === 'on') {
        node.replaceWithText(onFunction?.getBody().getText() ?? "");
      }

      console.log(onFunction?.getText());
      console.log(offFunction?.getText());
      console.log(featureName);
    }
  })
})

project.save();