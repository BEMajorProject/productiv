import Constants from "expo-constants";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { RootStackParamList } from "types";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";

import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import { trpc } from "./utils/trpc";

SplashScreen.preventAutoHideAsync();

const { manifest } = Constants;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const localhost = `http://${manifest!.debuggerHost?.split(":").shift()}:3001`;

console.log(localhost);

export default function App() {
  const [fontsLoaded] = useFonts({
    raleway: require("./assets/fonts/Raleway-Regular.ttf"),
    "raleway-italic": require("./assets/fonts/Raleway-Italic.ttf"),
    "raleway-semibold": require("./assets/fonts/Raleway-SemiBold.ttf"),
    "raleway-bold": require("./assets/fonts/Raleway-Bold.ttf"),
    "raleway-medium": require("./assets/fonts/Raleway-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${localhost}/trpc`,
          // optional
          // headers() {
          //   return {
          //     authorization: getAuthCookie(),
          //   };
          // },
        }),
      ],
    }),
  );

  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete || !fontsLoaded) {
    return null;
  }

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider onLayout={onLayoutRootView}>
          <View style={styles.screen}>
            <Navigation />
            <StatusBar />
          </View>
          <Toast />
        </SafeAreaProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
