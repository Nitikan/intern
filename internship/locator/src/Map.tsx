import React, { RefObject } from 'react';
import station from './Export_DataFrame1.json';
const divMapStyle = {
    width: '30%',
    height: '60vh',
};

export default class Map extends React.Component {

    map: any = undefined;
    mapRef: RefObject<HTMLDivElement>;
    thailand = {lat: 13.736717, lng: 100.523186};
       
    constructor(props) {
        super(props);

        this.mapRef = React.createRef();
    }
    
    initMap() {
        const google = (window as any).google;
        this.map = new google.maps.Map(this.mapRef.current, {
          center: this.thailand,
          zoom: 11,
          mapTypeId: 'roadmap',
          mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU}
        });
    }

    createMarker(){
        const google = (window as any).google;
        const marker = new google.maps.Marker({
            map : this.map,
            position : this.thailand
        })
    }

    componentDidMount() {
        this.initMap();
        this.createMarker();
    }

    render() {
        return (
            <div id ='map'>
                <div ref={this.mapRef} style={divMapStyle} />
            </div>
        );
    }
}
