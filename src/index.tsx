import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-own-number' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const OwnNumberModule = isTurboModuleEnabled
  ? require('./NativeOwnNumber').default
  : NativeModules.OwnNumber;

const OwnNumber = OwnNumberModule
  ? OwnNumberModule
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return OwnNumber.multiply(a, b);
}
