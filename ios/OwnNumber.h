
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNOwnNumberSpec.h"

@interface OwnNumber : NSObject <NativeOwnNumberSpec>
#else
#import <React/RCTBridgeModule.h>

@interface OwnNumber : NSObject <RCTBridgeModule>
#endif

@end
