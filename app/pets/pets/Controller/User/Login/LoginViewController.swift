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
    let authorizationAppleIDButton = ASAuthorizationAppleIDButton(type: .signIn, style: .black)

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
                        self.removeSpinner()
                        self.showCustomAlert(title: "Não foi possível fazer login!",
                                             message: description, isOneButton: true) { (_) in }
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
                    self.removeSpinner()
                    self.showCustomAlert(title: "Não foi possível criar um Usuário!",
                                         message: description, isOneButton: true) { (_) in }
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
        authorizationAppleIDButton.addTarget(
            self,
            action: #selector(handleAppleIdRequest),
            for: .touchUpInside
        )
        authorizationAppleIDButton.cornerRadius = 10
        self.view.addSubview(authorizationAppleIDButton)

        authorizationAppleIDButton.translatesAutoresizingMaskIntoConstraints = false
        NSLayoutConstraint.activate([
            authorizationAppleIDButton.centerXAnchor.constraint(equalTo: self.view.centerXAnchor),
            authorizationAppleIDButton.bottomAnchor.constraint(equalTo: self.view.bottomAnchor, constant: -100),
            authorizationAppleIDButton.widthAnchor.constraint(equalTo: self.view.widthAnchor, multiplier: 0.8),
            authorizationAppleIDButton.heightAnchor.constraint(equalToConstant: 50)
        ])
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
                    self.removeSpinner()
                    self.showCustomAlert(title: "Não foi possível fazer login!",
                                         message: description, isOneButton: true) { (_) in }
                }
            }
        }
    }
}
