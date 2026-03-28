export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Research" | "NLP" | "Computer Vision" | "Automation";
  accentColor: string;
  tech: string[];
  github: string;
  demo?: string;
  accuracy?: string;
  status: "Deployed" | "Research Prototype" | "Research Complete" | "Active Research" | "Operational";
  fullDescription?: string;
  architecture?: string;
}

export const projects: Project[] = [
  {
    id: "hcms",
    title: "Human Cognition Measurement System (HCMS)",
    description:
      "A DOI-backed formal framework measuring cognitive stability, confidence calibration, and understanding consistency across 15 research phases. Challenges traditional assessment paradigms.",
    category: "Research",
    accentColor: "#7c3aed",
    tech: ["Python", "TeX", "Statistical Analysis", "Cognitive Science"],
    github: "https://github.com/RayanAIX/HCMS",
    status: "Research Complete",
    fullDescription:
      "HCMS challenges the traditional equating of correctness with understanding. It models understanding as a multidimensional construct: accuracy, confidence calibration, reasoning consistency, and robustness under perturbation across 15 structured research phases. The system provides diagnostic signals rather than predictive scores, making it interpretable and reproducible for education and cognitive research.",
    architecture:
      "The pipeline processes input questions through four core layers: Understanding Analysis → Confidence Calibration → Consistency Check → Robustness Testing. Each layer produces signals that feed into an Explainability Layer before generating the final Cognitive Profile Output.",
  },
  {
    id: "cognitive-benchmark",
    title: "Cognitive Robustness Benchmark",
    description:
      "Generates semantic perturbations of questions to measure answer drift, confidence volatility, and explanation inconsistency under controlled variation.",
    category: "Research",
    accentColor: "#7c3aed",
    tech: ["Python", "NLP", "Statistical Analysis"],
    github: "https://github.com/RayanAIX/CognitiveBenchmark",
    status: "Active Research",
    fullDescription:
      "This benchmark creates controlled variations of questions to test the robustness of AI and human reasoning. By measuring how answers, confidence levels, and explanations change under perturbation, we can identify fragile understanding versus stable comprehension.",
  },
  {
    id: "learning-analytics",
    title: "Learning Analytics System",
    description:
      "Tracks confidence, hesitation patterns, and mastery progression over time. Bridges educational psychology and AI measurement.",
    category: "Research",
    accentColor: "#7c3aed",
    tech: ["Python", "Pandas", "Scikit-learn"],
    github: "https://github.com/RayanAIX/LearningAnalytics",
    status: "Research Prototype",
    fullDescription:
      "An analytics platform that goes beyond simple score tracking. It captures confidence levels, response times, hesitation patterns, and learning curves to build comprehensive learner profiles that inform adaptive educational interventions.",
  },
  {
    id: "fake-news-detector",
    title: "Fake News Detection AI",
    description:
      "NLP classifier achieving 97% accuracy on real-world news data. Deployed live on Hugging Face Spaces using TF-IDF + Passive Aggressive Classifier.",
    category: "NLP",
    accentColor: "#00d4ff",
    tech: ["Python", "Scikit-learn", "NLTK", "Gradio"],
    github: "https://github.com/RayanAIX/Fake-News-Detection-AI",
    demo: "https://huggingface.co/spaces/RayNetic/Fake-News-Detection-AI",
    accuracy: "97%",
    status: "Deployed",
    fullDescription:
      "A machine learning system that classifies news articles as real or fake using text-based features. The Passive Aggressive algorithm with TF-IDF vectorization provides robustness against adversarial examples while maintaining high accuracy on imbalanced datasets.",
  },
  {
    id: "emotion-classifier",
    title: "Emotion Classifier AI",
    description:
      "CNN trained on FER2013 dataset detecting 7 emotion classes in real-time via webcam. Keras/TensorFlow pipeline with live inference capabilities.",
    category: "Computer Vision",
    accentColor: "#f59e0b",
    tech: ["TensorFlow", "Keras", "OpenCV", "CNN"],
    github: "https://github.com/RayanAIX/EmotionAI",
    status: "Deployed",
    fullDescription:
      "A convolutional neural network trained on the FER2013 facial expression dataset. The model detects seven basic emotions (angry, disgust, fear, happy, sad, surprise, neutral) in real-time from webcam feeds, demonstrating practical computer vision applications.",
  },
  {
    id: "medical-imaging",
    title: "Medical Imaging AI",
    description:
      "Multi-label chest condition detection on ChestMNIST dataset using Convolutional Neural Networks for healthcare screening applications.",
    category: "Computer Vision",
    accentColor: "#10b981",
    tech: ["PyTorch", "CNN", "MedMNIST", "Healthcare AI"],
    github: "https://github.com/RayanAIX/MedicalImaging",
    status: "Research Complete",
    fullDescription:
      "An AI system that detects multiple chest conditions from X-ray images using the ChestMNIST dataset. The multi-label classification approach allows for identifying co-occurring conditions, which is crucial for real-world medical diagnosis support.",
  },
  {
    id: "speech-translator",
    title: "Speech-to-Text Translator",
    description:
      "Real-time multilingual audio transcription powered by OpenAI Whisper + Google Translate. Supports 50+ language pairs with live audio processing.",
    category: "NLP",
    accentColor: "#00d4ff",
    tech: ["Whisper", "Google Translate API", "Python", "Gradio"],
    github: "https://github.com/RayanAIX/SpeechTranslator",
    status: "Deployed",
    fullDescription:
      "A speech translation system that converts spoken language to text, then translates to target languages. Using OpenAI's Whisper for transcription and Google Translate for translation, it supports over 50 language pairs with near real-time performance.",
  },
  {
    id: "social-automation",
    title: "Social Media Automation Engine",
    description:
      "AI-powered content engine that auto-generates captions, hashtags, and cross-posts to LinkedIn, Instagram, Facebook via Make.com + GPT-4.",
    category: "Automation",
    accentColor: "#ec4899",
    tech: ["Make.com", "OpenAI API", "GPT-4", "REST APIs"],
    github: "https://github.com/RayanAIX/SocialAutomation",
    status: "Operational",
    fullDescription:
      "A content automation pipeline that uses GPT-4 to generate engaging social media posts, then distributes them across multiple platforms. The system includes hashtag optimization, timing algorithms, and performance tracking.",
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const filterProjectsByCategory = (
  category: string
): Project[] => {
  if (category === "All") return projects;
  return projects.filter((project) => project.category === category);
};

export const categories = ["All", "Research", "NLP", "Computer Vision", "Automation"];
