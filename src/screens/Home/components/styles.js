import {Dimensions, StyleSheet} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const goButtonStyle = StyleSheet.create({
  buttonStyle: {
    width: 0.4 * width,
    marginLeft: 0.3* width,
    marginRight: 0.3*width,
    backgroundColor: '#607D8B',
    borderRadius: 5,
    height:0.064*height,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:0.02*height,
    shadowColor:"#000",
    shadowOffset:{width:5,height:5},
    shadowOpacity:0.2,
    shadowRadius:10
  },
  textStyle:{
    color:"#fff",
    fontWeight:"500",
    fontSize:17
  }
});

export const locationStyles = StyleSheet.create({
  viewStyle:{
    width: 0.8*width,
    backgroundColor:"white",
    position:"absolute",
    top:50
  }
});



export const locationButtonStyle = StyleSheet.create({
  buttonStyleOrigin: {
    width: 0.8 * width,
    marginLeft: 0.1* width,
    marginRight: 0.1*width,
    backgroundColor: 'white',
    borderRadius: 5,
    height:0.064*height,
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    paddingLeft:0.1*width,
    justifyContent:'center',
    marginBottom:0.02*height,
    shadowColor:"#000",
    shadowOffset:{width:5,height:5},
    shadowOpacity:0.2,
    shadowRadius:10,
    borderLeftWidth:0.05*width,
    borderColor:"#D80027"
  },
  buttonStyleDestination: {
    width: 0.8 * width,
    marginLeft: 0.1* width,
    marginRight: 0.1*width,
    backgroundColor: 'white',
    borderRadius: 5,
    height:0.064*height,
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    paddingLeft:0.1*width,
    justifyContent:'center',
    marginBottom:0.02*height,
    shadowColor:"#000",
    shadowOffset:{width:5,height:5},
    shadowOpacity:0.2,
    shadowRadius:10,
    borderLeftWidth:0.05*width,
    borderColor:"#5AA1DB"
  },
  placeholderStyle:{
    fontSize:17,
    fontWeight:"300",
    textAlign:"left",
    color:"#555"
  },
  textStyle:{
    fontSize:17,
    fontWeight:"400",
    textAlign:"left",
    color:"#222"
  },
});

export const googlePlacesStyle = {
  container:{
    backgroundColor:"#fafafa",
    borderRadius:6,
    shadowColor:"#000",
    shadowOffset:{width:5,height:5},
    shadowOpacity:0.2,
    shadowRadius:10,
  },
  textInputContainer: {
    width: '100%',
    backgroundColor:"white",
    borderWidth:0,
    borderRadius:6

  },
  description: {
    fontWeight: '300'
  },
  predefinedPlacesDescription: {
  color: '#1faadb'
  },
  listView:{
    backgroundColor:"#fafafa",
    borderRadius:6
  },
  poweredContainer:{
    display:"none",
    borderRadius:6
  },
  separator:{
    height:1,
    backgroundColor:"#dae1e9"
  }
};
