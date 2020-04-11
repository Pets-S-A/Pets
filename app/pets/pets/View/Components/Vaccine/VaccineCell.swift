//
//  VaccineCell.swift
//  pets
//
//  Created by Matheus Silva on 26/03/20.
//  Copyright © 2020 Matheus Gois. All rights reserved.
//

import UIKit

class VaccineCell: UITableViewCell {
    @IBOutlet weak var name: UILabel!
    @IBOutlet weak var date: UILabel!

    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
