//
//  ViewController.swift
//  pets
//
//  Created by Matheus Silva on 23/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import Foundation
import UIKit


extension UIViewController {
    func setupKeyboard() {
        NotificationCenter.default.addObserver(self,
                                               selector: #selector(keyboardWillShow),
            name: UIResponder.keyboardWillShowNotification, object: nil)
        NotificationCenter.default.addObserver(self,
                                               selector: #selector(keyboardWillHide),
            name: UIResponder.keyboardWillHideNotification, object: nil)
    }
    @objc
    private func keyboardWillShow(sender: NSNotification) {
        view.frame.origin.y = -150
    }
    @objc
    private func keyboardWillHide(sender: NSNotification) {
        view.frame.origin.y = 0
    }
    @objc
    private func dismissKeyboard() {
        view.endEditing(true)
    }
}

extension UIViewController {
    func back() {
        dismiss(animated: true, completion: nil)
    }
}
