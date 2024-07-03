class Observer {
	observers: any[];
	constructor() {
		this.observers = [];
	}

	subscribe(observer: any) {
		this.observers.push(observer);
	}

	unsubscribe(observer: any) {
		this.observers = this.observers.filter((obs) => obs !== observer);
	}

	notify() {
		this.observers.forEach((observer) => {
			observer.update();
		});
	}
}

export const observer = new Observer();
