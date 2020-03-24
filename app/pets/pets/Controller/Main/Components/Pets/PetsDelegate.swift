//
//  PetsDelegate.swift
//  pets
//
//  Created by Matheus Silva on 24/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit

protocol PetsProtocolDelegate {
    
}
class PetsDelegate: NSObject, UICollectionViewDelegate, UICollectionViewDelegateFlowLayout {
    var delegate: PetsProtocolDelegate?
    var pets = Pets()
}
