export const AnswerForm = () => {
        return (
                <section className="max-w-2xl mx-auto">
                        <form className="space-y-4">
                                <label className="block">
                                        <span className="text-gray-700">Share your answer</span>
                                        <textarea
                                                className="mt-1 block w-full rounded-md border-gray-200 shadow-sm"
                                                rows={4}
                                        ></textarea>
                                </label>
                                <div className="flex items-center justify-between">
                                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                                                Submit
                                        </button>
                                        <div className="text-sm text-gray-500">Be kind and concise.</div>
                                </div>
                        </form>
                </section>
        );
};
