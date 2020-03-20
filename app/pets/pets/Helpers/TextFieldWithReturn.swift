//
//  TextFieldWithReturn.swift
//  pets
//
//  Created by Matheus Silva on 11/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit

class TextFieldWithReturn: UITextField, UITextFieldDelegate {
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        self.delegate = self
    }
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        textField.resignFirstResponder()
        return true
    }
    func setText(text: String) {
        self.text = text
    }
}

class TextFieldWithReturnMail: UITextField, UITextFieldDelegate {
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        keyboardType = .emailAddress
        self.delegate = self
    }
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        textField.resignFirstResponder()
        return true
    }
    func setText(text: String) {
        self.text = text
    }
}

class TextFieldWithReturnSecure: UITextField, UITextFieldDelegate {
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        isSecureTextEntry = true
        self.delegate = self
    }
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        textField.resignFirstResponder()
        return true
    }
    func setText(text: String) {
        self.text = text
    }
}
