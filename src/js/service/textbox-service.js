app.service('textBoxWidgetService',function(){

	this.callClick = function(type , font){
		switch(type){
			case 'textSizes':
				wysiwygeditor.fontSize( font );
			case 'bold':
				wysiwygeditor.bold();
				break;
			case 'italic':
				wysiwygeditor.italic();
				break;
			case 'underline':
				wysiwygeditor.underline();
				break;
			case 'undo':
				document.execCommand( 'undo' );
				break;
			case 'redo':
				document.execCommand( 'redo' );
				break;
			case 'alignLeft':
				wysiwygeditor.align('left');
				break;
			case 'alignCenter':
				wysiwygeditor.align('center');
				break;
			case 'alignRight':
				wysiwygeditor.align('right');
				break;
			case 'alignJustify':
				wysiwygeditor.align('justify');
				break;
			case 'indent':
				wysiwygeditor.indent();
				break;
			case 'outdent':
				wysiwygeditor.indent('outdent');
				break;
		}
	};

	this.fontSelect = function( fonttype ){
		var textsize;
		switch(fonttype){
			case 'giant':
				textsize = 20;
				break;
			case 'header':
				textsize = 15;
				break;
			case 'large':
				textsize = 12;
				break;
			case 'medium':
				textsize = 8;
				break;
			case 'small':
				textsize = 3;
				break;
		}
		return textsize;
	}
});