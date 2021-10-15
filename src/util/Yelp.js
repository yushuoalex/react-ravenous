const apiKey = 'UJWRYtTHVzk4_2h4bL3GF55IwwHKboqAjS9uSIGnmiBIGbKh8yP3dGp2E_IPL1JNU_TEjjX2v1trpHV6Pk1a-_-88yQS2LNftn2-Fcu0zj7fioaJrL0lnjaGs7NoYXYx';

const Yelp = {
    search (term, location, sortBy) {
        const urlToFetch = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
        console.log(urlToFetch);
        return fetch(urlToFetch, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => response.json()).then(jsonResponse => {
            if (jsonResponse.businesses) {
                console.log(jsonResponse.businesses);
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                });
            }
        });
    }

};

export default Yelp;