//
//  UIView.swift
//  pets
//
//  Created by Matheus Silva on 11/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit

extension UIViewController {
    func showAlert(title: String, message: String) {
        let alertController = UIAlertController(title: title, message: message, preferredStyle: .alert)
        alertController.addAction(UIAlertAction(title: "Dismiss", style: .default))
        present(alertController, animated: true, completion: nil)
    }
}
