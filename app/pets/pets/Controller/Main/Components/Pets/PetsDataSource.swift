//
//  PetsDataSource.swift
//  pets
//
//  Created by Matheus Silva on 24/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit

protocol PetsProtocolDataSource {
    func getPets(pets: Pets)
    func setUpCollectionView() -> UICollectionView
}

class PetsDataSource: NSObject, UICollectionViewDataSource, PetsProtocolDelegate {
    var delegate: PetsProtocolDataSource?
    var pets = Pets()
    
    override init() {
        register()
        fetch()
    }

    func fetch() {
        PetHandler.getAll { (response) in
            switch response {
            case .error(let description):
                print(description)
            case .success(let answer):
                DispatchQueue.main.async {
                    self.delegate?.getPets(pets: answer)
                }
            }
        }
    }
    
    func register() {
        let collectionView = delegate?.setUpCollectionView()
        let cell = UINib(nibName: "PetCell", bundle: nil)
        collectionView?.register(cell, forCellWithReuseIdentifier: "PetCell")
    }
    
    internal func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return 1
    }
    
    internal func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        return UICollectionViewCell()
    }
}
