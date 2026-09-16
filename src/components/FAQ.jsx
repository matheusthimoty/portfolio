import { faqData } from '../data/faqData';

export default function FAQ() {
  return (
    <section id="faq" className="py-16 px-4 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-zinc-900 mb-8">Dúvidas Frequentes</h2>
        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-lg border border-zinc-200">
              <h4 className="font-semibold text-zinc-900">{item.q}</h4>
              <p className="mt-2 text-zinc-600 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
