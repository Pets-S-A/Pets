//
//  LoginViewController.swift
//  pets
//
//  Created by Matheus Silva on 10/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit

class LoginViewController: UIViewController {
    @IBOutlet weak var login: UITextField!
    @IBOutlet weak var password: UITextField!
    
    

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        config()
    }
    
    func config() {
        setupKeyboard()
    }

    @IBAction func doLogin() {
        guard let email = login.text, email != "" else {
            UIAlert.show(controller: self, title: "Digite um email",
                         message: "") { (_) in }
            return
        }
        guard let password = password.text, password != "" else {
            UIAlert.show(controller: self, title: "Digite uma senha",
            message: "") { (_) in }
            return
        }
        let params = [
            "email": email,
            "password": password,
            "application": "json"
        ]
        self.showSpinner(onView: self.view)
        UserHandler.auth(params: params) { (response) in
            switch response {
            case .success(let user, let token):
                DispatchQueue.main.async {
                    Token.value = token
                    CommonData.shared.user = user
                    self.performSegue(withIdentifier: "toMain", sender: nil)
                    self.removeSpinner()
                }
            case.error(let description):
                DispatchQueue.main.async {
                    UIAlert.show(controller: self, title: "Não foi possível fazer login!", message: description) { (_) in }
                    self.removeSpinner()
                }
            }
        }
    }
    
    // MARK: - Keyboard
    var tap: UITapGestureRecognizer!
    func setupKeyboard() {
        tap = UITapGestureRecognizer(target: self, action: #selector(dismissKeyboard))
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
