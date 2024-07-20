import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { TouchableOpacity } from "react-native";
import * as Clipboard from "expo-clipboard";
import useStorage from "../../hooks/useStorage"
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

const { height: screenHeight } = Dimensions.get("window");

export function ModalServico({ handleClose }: { handleClose: () => void }) {

  const [itemLs, setItemLs] = useState([])
  const focused = useIsFocused();
  const { getItem, saveItem } = useStorage();

  useEffect(() => {
    async function getItemLs(){
      setItemLs(await getItem('teste'));
    };

    getItemLs();
  }, [focused]);

  async function segurou() {
    const texto = "Texto copiado";
    await Clipboard.setStringAsync(texto);
    await saveItem('teste', texto);
    handleClose();
  }

  return (
    <View style={styles.mainModal}>
      <ThemedView style={styles.containerModal}>
        <ThemedText>
          <Pressable
            onLongPress={() => {
              segurou();
            }}
          >
            <ThemedText>Clique e segure aqui!</ThemedText>
            <ThemedText>{itemLs}</ThemedText>
          </Pressable>
        </ThemedText>
        <ThemedView style={styles.botoesModal}>
          <TouchableOpacity onPress={handleClose}>
            <ThemedText>Voltar</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity>
            <ThemedText>Selecionar</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainModal: {
    height: screenHeight,
    backgroundColor: "rgba(24,24,24,0.9)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerModal: {
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 24,
    paddingBottom: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#111",
  },
  botoesModal: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    gap: 15,
    padding: 20,
  },
});
