//
//  ImagePicker.swift
//  pets
//
//  Created by Matheus Silva on 11/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import Foundation
import UIKit

class ImagePickerManager: NSObject, UIImagePickerControllerDelegate, UINavigationControllerDelegate {

    var picker = UIImagePickerController()
    var alert = UIAlertController(title: "Escolha uma Imagem", message: nil, preferredStyle: .actionSheet)
    var viewController: UIViewController?
    var pickImageCallback: ((UIImage) -> Void)?

    override init() {
        super.init()
    }

    func pickImage(_ viewController: UIViewController, _ callback: @escaping ((UIImage) -> Void)) {
        pickImageCallback = callback
        self.viewController = viewController

        let cameraAction = UIAlertAction(title: NSLocalizedString("Câmera", comment: ""), style: .default) { _ in
            self.openCamera()
        }

        let gallaryAction = UIAlertAction(title: NSLocalizedString("Galeria", comment: ""), style: .default) { _ in
            self.openGallery()
        }
        let cancelAction = UIAlertAction(title: NSLocalizedString("Cancelar", comment: ""), style: .cancel) { _ in
        }

        // Add the actions
        picker.delegate = self
        alert.addAction(cameraAction)
        alert.addAction(gallaryAction)
        alert.addAction(cancelAction)
        alert.popoverPresentationController?.sourceView = self.viewController!.view
        viewController.present(alert, animated: true, completion: nil)
    }
    internal func openCamera() {
        alert.dismiss(animated: true, completion: nil)
        if UIImagePickerController .isSourceTypeAvailable(.camera) {
            picker.sourceType = .camera
            self.viewController!.present(picker, animated: true, completion: nil)
        } else {
            self.showAlert(
                title: NSLocalizedString("Erro ao carregar imagem!", comment: ""),
                message: NSLocalizedString("Imagem não pode ser carregada!", comment: "")
            )
        }
    }
    internal func openGallery() {
        alert.dismiss(animated: true, completion: nil)
        picker.sourceType = .photoLibrary
        self.viewController!.present(picker, animated: true, completion: nil)
    }

    internal func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
        picker.dismiss(animated: true, completion: nil)
    }

    // For Swift 4.2
    internal func imagePickerController(_ picker: UIImagePickerController,
                                        didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey: Any]) {
        picker.dismiss(animated: true, completion: nil)
        guard let image = info[.originalImage] as? UIImage else {
            fatalError("Expected a dictionary containing an image, but was provided the following: \(info)")
        }
        pickImageCallback?(image)
    }

    internal func showAlert(title: String, message: String) {
        let alertController = UIAlertController(title: title, message: message, preferredStyle: .alert)
        alertController.addAction(UIAlertAction(title: "Dismiss", style: .default))
        viewController?.present(alertController, animated: true, completion: nil)
    }

    @objc
    internal func imagePickerController(_ picker: UIImagePickerController, pickedImage: UIImage?) {
    }

}
