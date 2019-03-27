import React from "react";
import Travel from "./Travel";

const travels = [
    {
        destination : "South of Italy",
        country : "Italy",
        photo : "https://d34ftvyq1mhc1v.cloudfront.net/1683-WondersSouthItaly_Positano.jpg",
        distance : "1 649 km"
    },
    {
        destination : "Barcelone",
        country : "Espagne",
        photo : "http://www.unmondederencontres.fr/wp-content/uploads/2018/03/barcelone-1.jpg",
        distance : "1 723 km"
    },
    {
        destination : "Paris",
        country : "France",
        photo : "https://www.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_233/node_7886/dossier-paris-patrimoine-%7C-780x340-%7C-%C2%A9-fotolia/160387-4-fre-FR/Dossier-Paris-Patrimoine-%7C-780x340-%7C-%C2%A9-Fotolia.jpg",
        distance : "410 km"
    },
    {
        destination : "Los-Angeles",
        country : "Etats-unis",
        photo : "https://dornsife.usc.edu/assets/img/news/story/2908.jpg",
        distance : "8 977 km"
    },
    {
        destination : "Rio de Janeiro",
        country : "Braisil",
        photo : "https://media.ceetiz.com/activity/GRARIO001/thumbnails/642x450/rio-corcovado-pain-de-sucre2.jpg",
        distance : "9 340 km"
    }
]
class Travels extends React.Component {
    render() {
      return (
          <div>
                {travels.map((voyage, idx) => {
                  return (
                    <Travel 
                      key = {idx}
                      {...voyage}
                      />
                );
                  })}
          </div>
        );
      }
    }
    

export default Travels;

/*
destination = {voyage.destination}
                      country =  {voyage.country}
                      photo = {voyage.photo}
                      distance = {voyage.distance}*/