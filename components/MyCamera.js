import { StyleSheet, View, Button} from 'react-native';
import { CameraView, useCameraPermissions  } from "expo-camera";


// Camera with frame overlay, scans barcode as soon as it sees one
export default function MyCamera( {scanned, handleScan} ) {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }
  
  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return(
      <View style={styles.container}>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.cameraContainer}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleScan}
        barcodeScannerSettings={{
          barcodeTypes: ['aztec', 'ean13', 'ean8', 'pdf417', 'upc_e', 'datamatrix', 'code39', 'code93' | 'itf14', 'codabar', 'code128', 'upc_a'],
        }}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.cameraOverlay}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    width:'100%',
    height:'100%',
    flexDirection: "column",
    justifyContent: "center",
    alignItems:'center',
  },
  cameraOverlay: {
   borderWidth:20,
   borderColor:'rgba(255, 255, 255, 0.6)',
   borderStyle:'dashed',
   padding:0,
   position:'absolute',
   flexDirection: "column",
   justifyContent: "center",
   margin:'auto',
   width:'80%',
   height:'80%',
  }
});
