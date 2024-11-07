import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Met à jour l'état pour afficher l'UI de secours
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Enregistrement de l'erreur (facultatif)
    console.error("Une erreur s'est produite :", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // UI de secours
      return <h1>Quelque chose s'est mal passé.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;