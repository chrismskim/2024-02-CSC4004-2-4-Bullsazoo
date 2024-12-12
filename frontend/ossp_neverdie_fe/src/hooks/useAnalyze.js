import { useState } from "react";
import { analyzeImage } from "../apis/analyze";

const useAnalyze = () => {
    const [status, setStatus] = useState(null);
    const [message, setMessage] = useState("");
    const [detectedObjects, setDetectedObjects] = useState([]);
    const [savedImagePath, setSavedImagePath] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const analyze = async () => {
        setLoading(true);
        setError(null);

        try {
            const data = await analyzeImage();
            setStatus(data.status);
            setMessage(data.message);
            setDetectedObjects(data.detected_objects);
            setSavedImagePath(data.saved_image_path);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return {
        status,
        message,
        detectedObjects,
        savedImagePath,
        loading,
        error,
        analyze,
    };
};

export default useAnalyze;
