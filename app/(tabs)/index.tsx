import {
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Modal,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { ModalServico } from "@/components/modal/ModalServico";

export default function HomeScreen() {
  const [cont, setCont] = useState(0);
  const [modalServicoVisible, SetModalServicoVisible] = useState(false);

  function atualizaCont(op: string) {
    if (op === "+") {
      setCont(cont + 1);
    } else if (op === "-" && cont - 1 >= 0) {
      setCont(cont - 1);
    }
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem Vindo! {cont}</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={[styles.titleContainer, styles.flexCenter]}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => atualizaCont("-")}
        >
          <ThemedText>-1</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => atualizaCont("+")}
        >
          <ThemedText>+1</ThemedText>
        </TouchableOpacity>
      </ThemedView>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => SetModalServicoVisible(true)}
      >
        <ThemedText>Novo Serviço</ThemedText>
      </TouchableOpacity>

      <Modal visible={modalServicoVisible} animationType="fade" transparent>
        <ModalServico handleClose={() => SetModalServicoVisible(false)}></ModalServico>
      </Modal>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
          to see changes. Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: "cmd + d", android: "cmd + m" })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{" "}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{" "}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
          directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    gap: 15,
  },
  botao: {
    borderColor: "#cdcdcd55",
    borderRadius: 6,
    borderWidth: 1,
    padding: 4,
    width: "40%",
    alignItems: "center",
  },
});
