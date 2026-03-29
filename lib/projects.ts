export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Research" | "NLP" | "Computer Vision" | "ML" | "Automation";
  accentColor: string;
  tech: string[];
  github: string;
  demo?: string;
  demoLabel?: string;
  accuracy?: string;
  status: "Deployed" | "Research Prototype" | "Research Complete" | "Active Research" | "Operational" | "Published" | "Complete";
  fullDescription?: string;
  architecture?: string;
  highlight?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "hcms",
    title: "Human Cognition Measurement System (HCMS)",
    description:
      "A 15-phase, research-grade cognitive assessment framework that goes beyond correctness. Models confidence calibration, reasoning consistency, and cognitive stability. DOI-backed preprint published on Zenodo.",
    category: "Research",
    accentColor: "#7c3aed",
    tech: ["Python", "TeX", "LaTeX", "Statistical Analysis", "Psychometrics"],
    github: "https://github.com/RayanAIX/HCMS-Human-Cognition-Measurement-System",
    demo: "https://zenodo.org/records/18269740",
    demoLabel: "Read Preprint",
    status: "Published",
    highlight: "DOI-Backed Preprint",
    featured: true,
    fullDescription:
      "HCMS challenges the traditional equating of correctness with understanding. It models understanding as a multidimensional construct: accuracy, confidence calibration, reasoning consistency, and robustness under perturbation across 15 structured research phases. The system provides diagnostic signals rather than predictive scores, making it interpretable and reproducible for education and cognitive research.",
    architecture:
      "The pipeline processes input questions through four core layers: Understanding Analysis → Confidence Calibration → Consistency Check → Robustness Testing. Each layer produces signals that feed into an Explainability Layer before generating the final Cognitive Profile Output.",
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
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
    github: "https://github.com/RayanAIX/emotion-classifier",
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
    github: "https://github.com/RayanAIX/AI-Medical-Imaging-Assistant",
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
    github: "https://github.com/RayanAIX/Speech-to-Text-Translator",
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
    github: "https://github.com/RayanAIX/sheet-to-social-automation",
    status: "Operational",
    fullDescription:
      "A content automation pipeline that uses GPT-4 to generate engaging social media posts, then distributes them across multiple platforms. The system includes hashtag optimization, timing algorithms, and performance tracking.",
  },
  {
    id: "road-lane-detection",
    title: "Road Lane Detection (OpenCV)",
    description:
      "Real-time road lane line detection using OpenCV computer vision pipeline. Processes video frames to identify and track lane boundaries for autonomous driving contexts.",
    category: "Computer Vision",
    accentColor: "#f59e0b",
    tech: ["Python", "OpenCV", "NumPy", "Computer Vision"],
    github: "https://github.com/RayanAIX/Road-Lane-Detection-OpenCV",
    status: "Complete",
  },
  {
    id: "casting-defect",
    title: "Casting Defect Detection (CNN)",
    description:
      "Industrial quality control system using Convolutional Neural Networks to detect surface defects in metal casting products. Computer vision for manufacturing automation.",
    category: "Computer Vision",
    accentColor: "#f59e0b",
    tech: ["Python", "TensorFlow", "CNN", "Jupyter Notebook"],
    github: "https://github.com/RayanAIX/Casting-Defect-Detection-CNN",
    status: "Complete",
  },
  {
    id: "telco-churn",
    title: "Telco Customer Churn Predictor",
    description:
      "Machine learning model predicting customer churn in telecommunications. Feature engineering, classification, and business insight generation from behavioral data.",
    category: "ML",
    accentColor: "#00d4ff",
    tech: ["Python", "Scikit-learn", "Pandas", "Jupyter Notebook"],
    github: "https://github.com/RayanAIX/Telco-Customer-Churn-Prediction",
    status: "Complete",
  },
  {
    id: "vehicle-detection",
    title: "Vehicle Detection & Counting (YOLO)",
    description:
      "Real-time vehicle detection and traffic counting system using YOLO object detection. Processes video streams to count vehicles by type across lanes.",
    category: "Computer Vision",
    accentColor: "#f59e0b",
    tech: ["Python", "YOLO", "OpenCV", "Computer Vision"],
    github: "https://github.com/RayanAIX/vehicle-detection-and-counting-yolo",
    status: "Deployed",
  },
  {
    id: "speech-emotion",
    title: "Speech Emotion Recognition",
    description:
      "Deep learning model that classifies human emotional states from raw audio signals. Uses MFCCs and spectral features with neural network classification.",
    category: "NLP",
    accentColor: "#00d4ff",
    tech: ["Python", "Librosa", "TensorFlow", "Audio ML"],
    github: "https://github.com/RayanAIX/Speech-Emotion-Recognition",
    status: "Complete",
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

export const categories = ["All", "Research", "NLP", "Computer Vision", "ML", "Automation"];
