//
// This function will preview a gift card in a new window.  This JavaScript
// assumes it's being called from an onClick HREF.
// Usage:
// <A HREF="javascript: void(0);" onClick="return ConvertibleFormGiftCardPreview(doneeNbr)"><img src="..."></A>
//
function ConvertibleFormGiftCardPreview(doneeNbr) {
	//
	var windowName = 'previewWindow';
	var windowOptions = 'height=ah,width=aw,scrollbars=yes,toolbar=no,status=no,menubar=no,resizable=yes';
	//
	// See if there's already a window open.  If so, reload and done.  Out.
	if ((window.previewWindow) && (!window.previewWindow.closed)) {
		previewWindow.location.reload();
		//
		return true;
	}
	//
	// Now gather all the stuff from the page, and send to the GiftCardServlet
	var magCode = escape(document.forms.convertible_form.cds_mag_code.value);
	var pageId = escape(document.forms.convertible_form.cds_page_id.value);
	// 
	var cardId;
	if (eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_card_desc.type") == "hidden") {
		cardId = escape(eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_card_desc.value"));
	} else {
		if (eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_card_desc.type") == "select-one") {
			cardId = escape(eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_card_desc["+eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_card_desc.selectedIndex")+"].value"));
		} else {
			for (var i=0 ; i < eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_card_desc.length") ; i++) {
		        if (eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_card_desc[i].checked")){
					cardId = escape(eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_card_desc[i].value"));
	        	}
		    }
		}
	}
	//

	var doneeName = "";
	if (document.forms.convertible_form.cds_name) {
		doneeName = escape(eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_name.value"));
	} else {
		doneeName = escape(eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_first_name.value") + " " + eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_last_name.value"));
	}
	var doneeEmail = escape(eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_email.value"));
	var doneeCountry = escape(eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_country.value"));
	var donorName = "";
	if (document.forms.convertible_form.cds_name) {
		donorName = escape(document.forms.convertible_form.cds_name.value);
	} else {
		donorName = escape(document.forms.convertible_form.cds_first_name.value + " " + document.forms.convertible_form.cds_last_name.value);
	}
	var donorEmail = escape(document.forms.convertible_form.cds_email.value);
	var doneeTerm = 0;
	var haveDoneeTV = false;
	var doneeNumber = 0;
	//
	if (eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_term_value.type") == "hidden") {
		doneeTerm = eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_term_value.value");
	} else {
		if ( (eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_term_value.length") != null) && (eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_term_value.length") > 0) ) {
			while (!haveDoneeTV && doneeNumber < 10) {
				if (eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_term_value[doneeNumber]")) {
					if (eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_term_value[doneeNumber].checked")) {
						haveDoneeTV = true;
						doneeTerm = eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_term_value[doneeNumber].value");
					}
				}
				doneeNumber++;
			}
		} else {
			if (eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_term_value.checked")) {
				doneeTerm = eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_term_value.value");
			}
		}
	}
	//
	var dateToSend = escape(eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_card_date.value"));
	var tmpEmailMessage = eval("document.forms.convertible_form.cds_donee"+doneeNbr+"_card_message.value");
	// Replace any xss characters with spaces.
	var xssChars = new Array("|", ";", "\"", "<", ">", "(", ")", "+", "%"); 
	//
	for (var i=0; i<10; i++){
		while (tmpEmailMessage.indexOf(xssChars[i]) > -1) {
			pos = tmpEmailMessage.indexOf(xssChars[i]);
			tmpEmailMessage = (tmpEmailMessage.substring(0, pos) + " " +
			  			       tmpEmailMessage.substring((pos + 1), tmpEmailMessage.length));
		}
	}
	// Replace any carriage returns in the emailMessage with "<BR>"
	var br = '<BR>';
	var out = '\n';
	//
	while (tmpEmailMessage.indexOf(out) > -1) {
		pos = tmpEmailMessage.indexOf(out);
		tmpEmailMessage = "" + (tmpEmailMessage.substring(0, pos) + br + 
							    tmpEmailMessage.substring((pos + out.length), tmpEmailMessage.length));
	}
	//
	var emailMessage = escape(tmpEmailMessage);
	//
	var windowURL = '/servlet/ConvertibleGiftCard?cds_page_id=' + pageId +
									 '&cds_mag_code=' + magCode + 
									 '&mag_code=' + magCode + 
									 '&donee_card_id=' + cardId + 
									 '&donee_name=' + doneeName + 
									 '&donee_email=' + doneeEmail + 
									 '&donee_country=' + doneeCountry + 
									 '&donor_name=' + donorName + 
									 '&donor_email=' + donorEmail + 
									 '&donee_term=' + doneeTerm + 
									 '&date_to_send=' + dateToSend + 
									 '&email_message=' + emailMessage;
									
	//
	var aw = screen.availWidth - 200;
	var ah = screen.availHeight - 200;
	//
	var newWin = window.open(windowURL, windowName, windowOptions);
	//
	newWin.moveTo(10, 10);
	newWin.resizeTo(aw, ah);
	//
	return true;
}
