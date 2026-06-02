import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Conta</Text>

      <View style={styles.containerAccnt}>
        
        <View style={styles.PerfilLine}>
          
          <View style={styles.Perfil}>
            <Ionicons name="person" size={77} color="#c1bfbf85" />
          </View>

          <View style={styles.areaName}>
            <Text style={styles.TextPerfil}>Seu Nome</Text>

            <Text style={styles.TextID}>@SeuNome</Text>

            <Text style={styles.Bio}>
              Gosto de filmes animados
            </Text>
          </View>

        </View>

        <View style={styles.optionAccount}>

          <Pressable style={styles.buttonOption}>
            <View style={styles.leftOption}>
              <Ionicons
                name="mail-outline"
                size={22}
                color="#444"
              />

              <Text style={styles.textOption}>
                E-mail
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#999"
            />
          </Pressable>

          <Pressable style={styles.buttonOption}>
            <View style={styles.leftOption}>
              <Ionicons
                name="lock-closed-outline"
                size={22}
                color="#444"
              />

              <Text style={styles.textOption}>
                Senha
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#999"
            />
          </Pressable>

          <Pressable style={styles.buttonOption}>
            <View style={styles.leftOption}>
              <Ionicons
                name="notifications-outline"
                size={22}
                color="#444"
              />

              <Text style={styles.textOption}>
                Notificações
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#999"
            />
          </Pressable>

          <Pressable style={styles.buttonOption}>
            <View style={styles.leftOption}>
              <Ionicons
                name="shield-outline"
                size={22}
                color="#444"
              />

              <Text style={styles.textOption}>
                Privacidade
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#999"
            />
          </Pressable>

          <Pressable style={styles.buttonOption}>
            <View style={styles.leftOption}>
              <Ionicons
                name="moon-outline"
                size={22}
                color="#444"
              />

              <Text style={styles.textOption}>
                Tema
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={20}
              color="#999"
            />
          </Pressable>

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },

  tittle: {
    fontSize: 35,
    marginLeft: 20,
    marginTop: 10,
    fontWeight: "600",
  },

  containerAccnt: {
    flex: 1,
    alignItems: "center",
  },

  PerfilLine: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    height: 130,
    width: 360,

    backgroundColor: "#ffffff",

    borderWidth: 1,
    borderColor: "#eaeaeaa3",
    borderRadius: 10,

    marginTop: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.15,
    shadowRadius: 4,

    elevation: 5,
  },

  Perfil: {
    borderRadius: 999,
    backgroundColor: "#ffffff",

    borderWidth: 1,
    borderColor: "#d2d2d2a8",

    height: 90,
    width: 90,

    alignItems: "center",
    justifyContent: "center",
  },

  areaName: {
    width: 240,
    height: 70,
  },

  TextPerfil: {
    fontSize: 20,
    fontWeight: "600",
  },

  TextID: {
    marginTop: 2,
    fontSize: 13,
    color: "#777",
  },

  Bio: {
    marginTop: 2,
    fontSize: 15,
    color: "#444",
  },

  optionAccount: {
    marginTop: 20,
    width: 350,

    backgroundColor: "#fff",

    borderRadius: 12,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.15,
    shadowRadius: 4,

    elevation: 5,

    overflow: "hidden",
  },

  buttonOption: {
    height: 65,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 20,

    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
  },

  leftOption: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  textOption: {
    fontSize: 17,
  },
});