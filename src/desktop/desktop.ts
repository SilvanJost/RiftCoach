import { OWWindow } from "@overwolf/overwolf-api-ts";

const windowName = 'Rift Coach'

export class Desktop {

    private currWindow: OWWindow;
    private mainWindow: OWWindow;
    private maximized: boolean = false;

    constructor() {
        this.mainWindow = new OWWindow('background');
        this.currWindow = new OWWindow(windowName);

        const closeButton = document.getElementById('closeButton');
        const maximizeButton = document.getElementById('maximizeButton');
        const minimizeButton = document.getElementById('minimizeButton');

        const header = document.getElementById('header');

        this.setDrag(header);

        closeButton.addEventListener('click', () => {
            this.mainWindow.close();
        });

        minimizeButton.addEventListener('click', () => {
            this.currWindow.minimize();
        });

        maximizeButton.addEventListener('click', () => {
            if (!this.maximized) {
                this.currWindow.maximize();
            } else {
                this.currWindow.restore();
            }

            this.maximized = !this.maximized;
        });
    }

    public async getWindowState() {
        return await this.currWindow.getWindowState();
    }

    private async setDrag(elem) {
        this.currWindow.dragMove(elem);
    }
}