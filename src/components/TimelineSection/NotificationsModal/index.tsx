import usePortal from "@hooks/usePortal";
import { NotificationContainer } from "./styled";

interface NotificationsModalProps {
	notification: INotification;
}

export function NotificationsModal({ notification }: NotificationsModalProps) {
	const { render } = usePortal("notifications-modal");

	return render(
		<NotificationContainer background={notification.color}>
			{notification.message}
		</NotificationContainer>
	);
}
