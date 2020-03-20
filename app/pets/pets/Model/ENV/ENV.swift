//
//  Server.swift
//  pets
//
//  Created by Matheus Silva on 10/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import Foundation

struct ENV {
    public static let production = true
    public static let IMAGE_URL_SERVER = "http://52.87.177.201:3000/"
    public static let IMAGE_ACCESS_CODE = "qrH9hy1SFind9iGLhEkykCH7Rp7jpRDq"
    public static var server: String {
        return ENV.production ? "https://br-vacci-pet.herokuapp.com/api" : "http://localhost:3000/api"
    }
    public static var token: [String: String] {
        return ["master-token": "token"]
    }
    
}
