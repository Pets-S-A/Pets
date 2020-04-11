//
//  ImageHandler.swift
//  pets
//
//  Created by Matheus Silva on 10/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit

enum ImageUploadResponse: Error {
    case success(result: Bool)
    case error(description: String)
}

struct ImageHandler {
    static let url = Environment.IMAGE_URL_SERVER

    static func uploadRequest(imagemT: UIImage?,
                              name: String,
                              withCompletion completion: @escaping (ImageUploadResponse) -> Void) {

        guard let myUrl = URL(string: ImageHandler.url + "upload") else {
            completion(ImageUploadResponse.error(description: "URL da imagem inválida."))
            return
        }

        guard let imagemT = imagemT else {
            completion(ImageUploadResponse.error(description: "Imagem inválida."))
            return
        }

        var request = URLRequest(url: myUrl)
        request.httpMethod = "POST"

        let boundary = ImageHandler().generateBoundaryString()
        request.setValue("multipart/form-data; boundary=\(boundary)", forHTTPHeaderField: "Content-Type")

        guard let imageData = imagemT.jpegData(compressionQuality: 0.01) else {
            completion(ImageUploadResponse.error(description: "Error: Impossível carregar a imagem."))
            return
        }

        var body = Data()
        body = ImageHandler().createBody(nil, Environment.IMAGE_ACCESS_CODE, imageData, boundary, name)
        request.httpBody = body

        let task = URLSession.shared.dataTask(with: request as URLRequest) { (data, response, error) in
            do {
                if let data = data {
                    let response = try JSONSerialization.jsonObject(with: data, options: [])
                    guard let res = response as? [String: Bool] else {
                        completion(ImageUploadResponse.error(description: "Error: Resposta inválida do servidor"))
                        return
                    }

                    if let result = res["result"], result {
                        completion(ImageUploadResponse.success(result: result))
                    } else {
                        completion(ImageUploadResponse.error(description: "Error: Sem resposta válida do servidor"))
                    }
                } else {
                    completion(ImageUploadResponse.error(description: "Error: Sem resposta do servidor"))
                }
            } catch let error as NSError {
                completion(ImageUploadResponse.error(description: "Error: \(error.localizedDescription)"))
            }
        }
        task.resume()
    }

    private func generateBoundaryString() -> String {
        return "Boundary-\(NSUUID().uuidString)"
    }

    private func createBody(_ parameters: [String: String]?,
                            _ filePathKey: String?,
                            _ imageDataKey: Data,
                            _ boundary: String,
                            _ nameOfImageForToSave: String) -> Data {
        var body = Data()

        if parameters != nil {
            for (key, value) in parameters! {
                body.appendString("--\(boundary)\r\n")
                body.appendString("Content-Disposition: form-data; name=\"\(key)\"\r\n\r\n")
                body.appendString("\(value)\r\n")
            }
        }

        let filename = nameOfImageForToSave
        let mimetype = "image/jpeg"

        body.appendString("--\(boundary)\r\n")
        body.appendString("Content-Disposition: form-data; name=\"\(filePathKey!)\"; filename=\"\(filename)\"\r\n")

        body.appendString("Content-Type: \(mimetype)\r\n\r\n")
        body.append(imageDataKey)
        body.appendString("\r\n")
        body.appendString("--\(boundary)--\r\n")
        return body
    }
}

extension Data {
    mutating func appendString(_ string: String) {
        let data = string.data(
            using: String.Encoding.utf8,
            allowLossyConversion: true)
        append(data!)
    }
}
