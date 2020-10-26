import Builder from './Builder';
import { option } from './option';

export default class colorPicker extends MediumEditor.Extension {
	private constructor(option: option) {
		super();
		this.option = { ...this.defaultOption, ...option };
		this.aria = this.option.aria;
		this.contentDefault = this.option.contentDefault;
		this.contentFA = this.option.contentFA;
	}

	private option: option;
	private defaultOption: option = {
		showHSL: false,
		showRGB: false,
		showHEX: true,
		showAlpha: false,
		color: '#ff0000',
		paletteEditable: false,
		useAlphaInPalette: 'auto',
		hueBarSize: [150, 11],
		slBarSize: [232, 150],
		contentDefault: '<b>TC</b>',
		aria: 'Set Text Color',
		contentFA: '<i class="fas fa-fill"></i>',
		removeButtonContent: '<i class="fas fa-eraser"></i>',
		removeButtonTitle: 'Remove Color Style'
	};

	name = 'textcolor';
	aria = 'Set Text Color';
	action = 'textcolor';
	contentDefault = '<b>TC</b>';
	contentFA = '<i class="fas fa-fill"></i>';

	private builder: Builder;

	static createInstance(option: option = {}): unknown {
		const colorPickerExtension = MediumEditor.extensions.form.extend(new colorPicker(option));
		const colorPickerEx = new colorPickerExtension();
		return colorPickerEx;
	}

	handleClick = function (this: colorPicker, event: MouseEvent): void {
		event.preventDefault();
		event.stopPropagation();

		if (this.isActive()) {
			this.hide();
			return;
		}
		this.selectionState = this.base.exportSelection();

		// If no text selected, stop here.
		if (this.selectionState && this.selectionState.end - this.selectionState.start === 0) {
			return;
		}
		this.show();
	};

	hide = function (this: colorPicker): void {
		this.setInactive();
		this.builder.hide();
	};

	show = function (this: colorPicker): void {
		this.setActive();

		const range = MediumEditor.selection.getSelectionRange(this.document);
		const parentElement = MediumEditor.selection.getSelectedParentElement(range) as HTMLElement;

		this.builder.show(parentElement.style.color, this.button.offsetLeft);
	};

	getForm = function (this: colorPicker): HTMLElement {
		if (!this.builder) {
			this.builder = new Builder(this.document, this.option, (color?: string) => {
				this.base.importSelection(this.selectionState, false);
				this.document.execCommand('styleWithCSS', false, 'true');
				if (typeof color === 'undefined' || color == '') this.document.execCommand('removeFormat', false, 'foreColor');
				else this.document.execCommand('foreColor', false, color);
			});

			this.base.subscribe('hideToolbar', () => {
				this.hide();
			});
		}

		return this.builder.getElement();
	};

	// getTemplate = function (this: colorPicker): void {
	// 	debugger;
	// 	const template = [
	// 		'<input type="text" class="medium-editor-toolbar-input" placeholder="',
	// 		this.placeholderText,
	// 		'">'
	// 	];

	// 	template.push(
	// 		'<a href="#" class="medium-editor-toolbar-save">',
	// 		this.getEditorOption('buttonLabels') === 'fontawesome' ? '<i class="fas fa-fill"></i>' : 'C',
	// 		'</a>'
	// 	);
	// };
}
