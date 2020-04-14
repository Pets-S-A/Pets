//
//  LoginViewController.swift
//  pets
//
//  Created by Matheus Silva on 10/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit
import AuthenticationServices

class LoginViewController: UIViewController {

    @IBOutlet weak var authorizationButton: ASAuthorizationAppleIDButton!

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        config()
        setUpSignInAppleButton()
    }

    func config() {

    }

    func auth(appleIDCredential: ASAuthorizationAppleIDCredential) {
        let password = appleIDCredential.user //appleID is the password
        let name = appleIDCredential.fullName?.getFullName() ?? ""
        let email = appleIDCredential.email ?? appleIDCredential.user

        let params = [
            "email": email,
            "password": password,
            "name": name,
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
                    if description == "Usuário não encontrado!" {
                        self.create(user: self.formatterUser(email: email, name: name, password: password))
                    } else {
                        UIAlert.show(controller: self,
                                     title: "Não foi possível fazer login!",
                                     message: description) { (_) in }
                        self.removeSpinner()
                    }
                }
            }
        }
    }
    func create(user: User) {
        UserHandler.create(user: user) { (response) in
            switch response {
            case .success(let answer):
                DispatchQueue.main.async {
                    CommonData.shared.user = answer
                    self.performSegue(withIdentifier: "toRegister", sender: nil)
                    self.removeSpinner()
                }
            case .error(let description):
                DispatchQueue.main.async {
                    UIAlert.show(controller: self, title: "Não foi possível criar um Usuário!",
                                 message: description) { (_) in }
                    self.removeSpinner()
                }
            }
        }
    }

    func formatterUser(email: String, name: String, password: String) -> User {
        return User(_id: nil, email: email, name: name, password: password, access: nil, person: nil)
    }
}

extension LoginViewController: ASAuthorizationControllerDelegate {
    func setUpSignInAppleButton() {
        authorizationButton.addTarget(self, action: #selector(handleAppleIdRequest), for: .touchUpInside)
        authorizationButton.cornerRadius = 10
    }
    @objc func handleAppleIdRequest() {
        let appleIDProvider = ASAuthorizationAppleIDProvider()
        let request = appleIDProvider.createRequest()
        request.requestedScopes = [.fullName, .email]
        let authorizationController = ASAuthorizationController(authorizationRequests: [request])
        authorizationController.delegate = self
        authorizationController.performRequests()
    }

    func authorizationController(controller: ASAuthorizationController,
                                 didCompleteWithAuthorization authorization: ASAuthorization) {
        if let appleIDCredential = authorization.credential as?  ASAuthorizationAppleIDCredential {
            self.auth(appleIDCredential: appleIDCredential)
        }

        func authorizationController(controller: ASAuthorizationController, didCompleteWithError error: Error) {
            print(error)
        }
    }
    @IBAction
    func loginAutomatic() {
        let params = [
            "email": "matheusgoislimasilva@gmail.com",
            "password": "000837.35591f9754ae48889b47debe49ec675e.2120",
            "name": "Matheus Gois",
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
                    UIAlert.show(controller: self,
                                 title: "Não foi possível fazer login!",
                                 message: description) { (_) in }
                    self.removeSpinner()
                }
            }
        }
    }
}
