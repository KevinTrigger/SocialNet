const mode = import.meta.env.MODE;
const baseUrl = mode === 'development' ? 'http://localhost:5000' : 'https://database-coral-mu.vercel.app';

export default baseUrl;