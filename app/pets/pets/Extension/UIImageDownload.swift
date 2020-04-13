//
//  UIImageDownload.swift
//  pets
//
//  Created by Matheus Silva on 10/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import Foundation
import UIKit

extension UIImageView {
    public func imageFromWeb(withURL serverURL: String) {
//        self.image = nil
        guard let url = URL(string: serverURL) else {
            NSLog("Error: Url para baixar imagem inválida")
            return
        }

        URLSession.shared.dataTask(with: url, completionHandler: { (data, _, error) -> Void in

            if error != nil {
                NSLog("Error: \(error as Any)")
                return
            }

            DispatchQueue.main.async(execute: {
                let image = UIImage(data: data!)
                if self.animationImages != nil {
                    self.animationImages?.removeAll()
                }
                self.image = image
            })

        }).resume()
    }
    public func imageFromWeb(withName name: String) {
        //TODO: - CHANGE THIS URL
        let serverURL = "https://br-malala-challenge.herokuapp.com/upload/\(name)"

        self.image = nil
        guard let url = URL(string: serverURL) else {
            NSLog("Error: Url para baixar imagem inválida")
            return
        }

        URLSession.shared.dataTask(with: url, completionHandler: { (data, _, error) -> Void in

            if error != nil {
                NSLog("Error: \(error as Any)")
                return
            }

            DispatchQueue.main.async(execute: {
                let image = UIImage(data: data!)
                if self.animationImages != nil {
                    self.animationImages?.removeAll()
                }
                self.image = image
            })

        }).resume()
    }
}
