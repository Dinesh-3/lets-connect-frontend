const deviceNotification = async ({ title, body }) => {
    if (Notification.permission === "default") {
        await Notification.requestPermission();
    }
    if (Notification.permission === "granted") {
        const notification = new Notification(title, {
            body,
            icon: "http://localhost:3000/assets/images/logo.svg"
        });
        notification.onclick = (e) => {
            window.location.href = "http://localhost:5000";
        };
        return notification;
    }
    return false;
};

export { deviceNotification };
