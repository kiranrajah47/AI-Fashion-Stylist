def recommend_outfit(occasion, style):

    recommendations = {

        ("Wedding", "Traditional"): {
            "outfit": "Sherwani",
            "color": "Maroon",
            "category": "Ethnic"
        },

        ("Wedding", "Modern"): {
            "outfit": "Designer Suit",
            "color": "Black",
            "category": "Formal"
        },

        ("Office", "Formal"): {
            "outfit": "Business Suit",
            "color": "Navy Blue",
            "category": "Formal"
        },

        ("Casual", "Modern"): {
            "outfit": "Jeans and T-Shirt",
            "color": "Blue",
            "category": "Casual"
        },

        ("Festival", "Traditional"): {
            "outfit": "Kurta Pajama",
            "color": "Cream",
            "category": "Ethnic"
        },

        ("Party", "Luxury"): {
            "outfit": "Tuxedo",
            "color": "Black",
            "category": "Luxury"
        },
    }

    return recommendations.get(
        (occasion, style),
        {
            "outfit": "Classic Suit",
            "color": "Gray",
            "category": "Formal"
        }
    )
