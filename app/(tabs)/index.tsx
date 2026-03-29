import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { router } from 'expo-router' // tool that lets you navigate between screens.

// This function describes what your welcome screen looks like
// — a blue screen with a logo, tagline, and a button.
// React Native reads this function and draws it on your phone screen!
export default function WelcomeScreen() {
  return (
    //styles.container references styling rules
    <View style={styles.container}>
      <Text style={styles.logo}>MiPagaré</Text>
      <Text style={styles.tagline}>
        Formaliza tus préstamos de forma simple y segura
      </Text>
      // login button
      <TouchableOpacity style={styles.button}  onPress={() => router.push('/login')}>
      <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      // register button
      <TouchableOpacity style={styles.button}  onPress={() => router.push('/register')}>
      <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

    </View>
  )
}
// TouchableOpacity user can tap the screen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004BA8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  tagline: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 48,
    opacity: 0.85,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 12,
    marginBottom: 18
  },
  buttonText: {
    color: '#004BA8',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
