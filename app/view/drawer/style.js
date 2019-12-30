import {StyleSheet} from 'react-native';
import Metrics from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  statusBar: Metrics.statusBar,
});

export default styles;
