import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <View style={styles.AreaPerfil}>
        <View style={styles.circulo}>
          <Ionicons name="person" color="#b3b3b3" size={90} />
        </View>

        <View style={styles.infoPerfil}>
          <Text style={styles.nome}>Seu Nome</Text>

          <Text style={styles.usuario}>@seunome</Text>

          <View style={styles.localizacao}>
            <Ionicons name="location-outline" size={16} color="#777" />
            <Text style={styles.cidade}> São Paulo, Brasil</Text>
          </View>

          <Text style={styles.bio}>Apaixonado por filmes e séries.</Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <View style={styles.estatisticas}>
        <View style={styles.itemEstatistica}>
          <Text style={styles.numero}>128</Text>
          <Text style={styles.label}>Assistidos</Text>
        </View>

        <View style={styles.itemEstatistica}>
          <Text style={styles.numero}>24</Text>
          <Text style={styles.label}>Watchlist</Text>
        </View>

        <View style={styles.itemEstatistica}>
          <Text style={styles.numero}>12</Text>
          <Text style={styles.label}>Avaliações</Text>
        </View>
      </View>
      <View style={styles.line_on}></View>
      <Text style={styles.tittle}>Filmes Recentes</Text>
    <View style={styles.containerTwo}>

  <View style={styles.AreaCard}>
    <Image
      source={{
        uri: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
      }}
      style={styles.poster}
    />
  </View>

  <View style={styles.AreaCard}>
    <Image
      source={{
        uri: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      }}
      style={styles.poster}
    />
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

  AreaPerfil: {
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 20,
    alignItems: "center",
  },

  circulo: {
    height: 110,
    width: 110,
    backgroundColor: "#e0e0e0",
    borderRadius: 999,

    alignItems: "center",
    justifyContent: "center",
  },

  infoPerfil: {
    marginLeft: 20,
    gap: 4,
  },

  nome: {
    fontSize: 24,
    fontWeight: "bold",
  },

  usuario: {
    fontSize: 16,
    color: "#777",
  },

  localizacao: {
    flexDirection: "row",
    alignItems: "center",
  },

  cidade: {
    color: "#777",
    fontSize: 14,
  },

  bio: {
    marginTop: 5,
    fontSize: 15,
    color: "#444",
    width: 180,
  },
  line: {
    height: 1,
    marginTop: 25,
    backgroundColor: "#bababa6b",
  },
  line_on: {
    marginTop: 25,
    height: 1,
    backgroundColor: "#bababa6b",
  },
  estatisticas: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
    backgroundColor: "#f9f9f9",
    marginHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
  },

  itemEstatistica: {
    alignItems: "center",
  },

  numero: {
    fontSize: 24,
    fontWeight: "bold",
  },

  label: {
    color: "#777",
    marginTop: 5,
  },

  tittle: {
    fontSize: 20,
    fontWeight: 500,
    marginTop: 5,
    marginLeft: 5,
    textAlign: "center",
  },
  AreaCard: {
    marginTop: 15,
    height: 250,
    width: 150,
    borderRadius: 10,
    backgroundColor: "#e7e7e7",
  },
  containerTwo: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 20,
  },
  poster: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
