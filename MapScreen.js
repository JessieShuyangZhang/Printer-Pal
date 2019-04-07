import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert,TouchableOpacity} from 'react-native';
//import { Examples } from '@shoutem/ui';
import { Card, Image, Subtitle,  Caption } from '@shoutem/ui';
import firebase from 'firebase';
//import UsersMap from './usersmap/UsersMap';
import MapView from 'react-native-maps';



/*changePrinterStatus= (status) => {
  fetch("https://getlocation20190405.firebaseio.com/places.json",{
      method: 'POST',
        body: JSON.stringify({
          status: status
        })
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
      //console.log(position);      
}*/

class HomeScreen extends Component{
  state = {
    usersPlaces: []
  }

  updateDatabase(m, status)  {
    console.log("hereee");
    var config = {
        databaseURL: "https://getlocation20190405.firebaseio.com",
        projectId: "getlocation20190405"
    };
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
    firebase.database().ref('places/'+m.key+'/').update({
      status,
    });
  }
  
  render() {
    return (  
     <View style={styles.container}>    
    
    <View style={styles.buttoncontainer}> 
    
      <Button title="village working" onPress={() => this.updateDatabase(usersPlaces[0],1)}/>
      <Button title="broken" onPress={() => this.updateDatabase(usersPlaces[0],0)}/>
      <Button title="a&h working" onPress={() => this.updateDatabase(usersPlaces[1],1)}/>            
      <Button title="broken" onPress={() => this.updateDatabase(usersPlaces[1],0)}/>

      
    </View>
   
    <View style={styles.buttoncontainer}> 
    
      <Button title="cargar working" onPress={() => this.updateDatabase(usersPlaces[2],1)}/>
      <Button title="broken" onPress={() => this.updateDatabase(usersPlaces[2],0)}/>
      <Button title="century working" onPress={() => this.updateDatabase(usersPlaces[3],1)}/>            
      <Button title="broken" onPress={() => this.updateDatabase(usersPlaces[3],0)}/>

      
    </View>
    <View style={styles.buttoncontainer}> 
    
      <Button title="n&n working" onPress={() => this.updateDatabase(usersPlaces[4],1)}/>
      <Button title="broken" onPress={() => this.updateDatabase(usersPlaces[4],0)}/>
      <Button title="troy working" onPress={() => this.updateDatabase(usersPlaces[5],1)}/>            
      <Button title="broken" onPress={() => this.updateDatabase(usersPlaces[5],0)}/>

      
    </View>

    <View style={styles.buttoncontainer}> 
    
      <Button title="flour working" onPress={() => this.updateDatabase(usersPlaces[6],1)}/>
      <Button title="broken" onPress={() => this.updateDatabase(usersPlaces[6],0)}/>
      <Button title="irc working" onPress={() => this.updateDatabase(usersPlaces[7],1)}/>            
      <Button title="broken" onPress={() => this.updateDatabase(usersPlaces[7],0)}/>

      
    </View>
      

      
        <View style={styles.mapContainer}>
          <MapView 
            initialRegion={{
                latitude: 34.022440,
                longitude: -118.285103,
                latitudeDelta: 0.0622,
                longitudeDelta: 0.0421,
              }}
            style={styles.map}
            showsUserLocation={true}>
            {usersPlaces.map((m,i) => (
            <MapView.Marker 
            coordinate={m.latLong}  
            title={m.title}
            description={m.description}     
            pinColor={ 'green' }
            >
             <MapView.Callout>
                <Card>
                
                  <Text style={styles.resname}>{m.title}</Text>
                  <Text style={styles.state}>{m.description}</Text>                
                
                    <Button title="Update status"/>
                  
                </Card>
              </MapView.Callout>
           

            </MapView.Marker>

          ))}
          </MapView>
        </View>
       </View>
    );
  }
}


export default HomeScreen;

const usersPlaces = [
  {
    state: true,
    key: 'village',
    title: 'village',
    
    description: 'printer out of order',
    latLong: {
      latitude: 34.0252,
      longitude: -118.2866,
    },
  },
  {
    state: true,
    key: 'artsandhumanities',
    title: 'artsandhumanities',
    description: 'printer out of order',
    latLong: {
      latitude: 34.0187,
      longitude: -118.2898,
    },
  },
  {
    state: true,
    key: 'cargar',
    title: 'cargar',
    description: 'printer out of order',
    latLong: {
      latitude: 34.0264,
      longitude: -118.2873,
    },
  },
  {
    state: true,
    key: 'century',
    title: 'century',
    description: 'printer out of order',
    latLong: {
      latitude: 34.0264,
      longitude: -118.2895,
    },
  },
  {
    state: true,
    key: 'newnorth',
    title: 'newnorth',
    description: 'printer out of order',
    latLong: {
      latitude: 34.0212,
      longitude: -118.2813,
    },
  },
  {
    state: true,
    key: 'pardee',
    title: 'pardee',
    description: 'printer out of order',
    latLong: {
      latitude: 34.0200,
      longitude: -118.2825,
    },
  },
  {
    state: true,
    key: 'flour',
    title: 'flour',
    description: 'printer out of order',
    latLong: {
      latitude: 34.0249,
      longitude: -118.2883,
    },
  },
  {
    state: true,
    key: 'irc',
    title: 'irc',
    description: 'printer out of order',
    latLong: {
      latitude: 34.0193,
      longitude: -118.291,
    },
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer:{
    width:'100%',
    height: 400
  },
  map:{
    width: '100%',
    height: '100%'
  },
  resname: {
    fontWeight: '600',
    fontSize: 20
  },
  state: {
    color: '#f44336',
    fontWeight: '600',
    fontSize: 16
  },
  buttoncontainer: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

