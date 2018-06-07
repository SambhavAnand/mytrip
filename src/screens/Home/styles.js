/*Library Immports*/
import {StyleSheet,Dimensions} from 'react-native';
const height= Dimensions.get("window").height;
midHeight=height/2
export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    display:'flex',
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  actIn:{
    position:"absolute",
    top:midHeight
  }
});
