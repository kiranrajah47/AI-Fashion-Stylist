function RecommendationCard({ recommendation }) {

    if (!recommendation) return null;

    return (
        <div
            style={{
                marginTop: "30px",
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                maxWidth: "350px",
                marginInline: "auto",
                background: "#fff"
            }}
        >
            <h3>Recommended Outfit</h3>

            <p><strong>Outfit:</strong> {recommendation.outfit}</p>

            <p><strong>Color:</strong> {recommendation.color}</p>

            <p><strong>Category:</strong> {recommendation.category}</p>

        </div>
    );
}

export default RecommendationCard;