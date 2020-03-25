//
//  PetsDataSource.swift
//  pets
//
//  Created by Matheus Silva on 24/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit



class PetsDataSource: NSObject, UICollectionViewDataSource {
    var pets = Pets()
    
    weak var viewController: UIViewController?
    
    func setup(collectionView: UICollectionView, viewController: UIViewController) {
        self.viewController = viewController
        collectionView.dataSource = self
        register(collectionView: collectionView)
    }

    func fetch(delegate: PetsDelegate) {
        PetHandler.getAll { (response) in
            switch response {
            case .error(let description):
                NSLog(description)
            case .success(let pets):
                DispatchQueue.main.async {
                    self.pets = pets
                    delegate.pets = pets
                    if let view = self.viewController as? MainViewController {
                        view.collectionView.reloadData()
                    }
                }
            }
        }
    }
    
    internal func register(collectionView: UICollectionView) {
        let cell = UINib(nibName: "PetCell", bundle: nil)
        collectionView.register(cell, forCellWithReuseIdentifier: "PetCell")
    }
    
    internal func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return pets.count
    }
    
    internal func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        if let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "PetCell",
                                                         for: indexPath) as? PetCell {
            let pet = pets[indexPath.row]
            DispatchQueue.main.async {
                cell.petImage.imageFromWeb(withURL: pet.image ?? "")
            }
            
            cell.petName.text = pet.name
            return cell
        }
        return UICollectionViewCell()
    }
    @objc
    func toDetail() {
        self.viewController?.performSegue(withIdentifier: "toDetail",
                                          sender: nil)
    }
}
