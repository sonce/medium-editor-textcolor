import AColorPicker from 'a-color-picker';
import { option } from './option';

export default class Builder {
	private ownerDocument: Document;
	private _root: HTMLDivElement;
	private colorPickerCtl: AColorPicker.ACPController;
	changeColor: (color?: string) => void;

	constructor(ownerDocument: Document, option: option, changeColorAction: (color?: string) => void) {
		this.ownerDocument = ownerDocument;
		this.changeColor = changeColorAction;
		this.init(option);
	}
	init(option: option): void {
		this.ownerDocument = this.ownerDocument || document;
		this._root = this.ownerDocument.createElement('div');
		this._root.style.display = 'none';
		this._root.style.position = 'absolute';
		this._root.style.top = '101%';

		this.colorPickerCtl = AColorPicker.createPicker(this._root, option);
		this.colorPickerCtl.on('change', (control: AColorPicker.ACPController, color?: string): void => {
			this.changeColor(color);
		});

		const newRow = document.createElement('div');
		newRow.classList.add('a-color-picker-row');
		newRow.classList.add('a-color-picker-empty');
		// newRow.classList.add('d-flex');
		// newRow.classList.add('justify-content-end');

		const emptyBtn = document.createElement('button');
		emptyBtn.classList.add('btn');
		emptyBtn.innerHTML = option.removeButtonContent;
		emptyBtn.title = option.removeButtonTitle;
		emptyBtn.addEventListener('click', () => {
			this.changeColor('');
		});

		newRow.appendChild(emptyBtn);
		this.colorPickerCtl.element.appendChild(newRow);
	}

	getElement(): HTMLElement {
		return this._root;
	}

	hide = function (): void {
		this._root.style.display = 'none';
	};

	show = function (currentColor: string, left: number): void {
		this.colorPickerCtl.color = currentColor;

		this._root.style.display = 'block';
		this._root.style.left = left + 'px';
	};
}
