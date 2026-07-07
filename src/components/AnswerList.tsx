export const AnswerList = ({ answers }) => {
        return (
                <section className="grid md:grid-cols-2 gap-6">
                        {answers.map((answer, idx) => (
                                <article key={idx} className="p-6 bg-white shadow rounded-lg">
                                        <p className="text-gray-800 mb-4">{answer.text}</p>
                                        <div className="text-sm text-gray-500">— {answer.author.name}</div>
                                        <div className="text-sm text-gray-500">{answer.createdAt}</div>
                                </article>
                        ))}
                </section>
        );
};
