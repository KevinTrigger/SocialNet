import { FC, useState } from "react";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { Icon, IconTheme } from "shared/ui/Icon/Icon";
import NotificationIcon from "shared/assets/icons/notifocation.svg?react";
import { Popup } from "shared/ui/Popups";
import { NotificationList } from "entities/Notification";
import { BrowserView, MobileView } from "react-device-detect";
import { Drawer } from "shared/ui/Drawer/Drawer";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onCloseDrawer = () => setIsOpen(false);
  const onOpenDrawer = () => setIsOpen(true);

  const trigger = (
    <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
      <Icon theme={IconTheme.INVERTED} Svg={NotificationIcon} />
    </Button>
  );

  return (
    <>
      <BrowserView>
        <Popup trigger={trigger}>
          <NotificationList />
        </Popup>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </>
  );
};
