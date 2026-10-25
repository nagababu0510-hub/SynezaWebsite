import React, { useState } from 'react';
import { Badge } from '@/components/common/Badge';
import { ChevronDown } from 'lucide-react';
import { HomepageSection } from '@/types/config';

interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'education' | 'software' | 'ai';
}

export const FaqSection: React.FC<{ section: HomepageSection }> = ({ section }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'What is Syneza Technologies, and how do the two business pillars connect?',
      answer:
        'Syneza Technologies is a technology solutions company operating across two complementary pillars: Pillar A delivers employability assessments, software simulations, and technical workshops to engineering colleges. Pillar B provides custom software development, application maintenance, modernization, and practical AI solutions to businesses. Our production software engineering experience directly informs the realism of our student training programmes, and our commitment to educational excellence reinforces our disciplined coding standards on client projects.',
      category: 'general',
    },
    {
      question: 'Does Syneza guarantee 100% job placements for students who complete the programmes?',
      answer:
        'No. We believe in complete transparency and do not make false guarantees of employment. Placement decisions remain the sole prerogative of hiring companies. Our mission is to provide rigorous, human-evaluated diagnostic assessments, actionable gap reports, and realistic simulated project experience that dramatically elevates students’ genuine technical competence and interview confidence.',
      category: 'education',
    },
    {
      question: 'How is the Employability Assessment structured, and is it purely an online quiz?',
      answer:
        'It is definitely not an online-only multiple-choice test. The assessment is supervised, paper-based and practical, covering 18 software engineering disciplines (such as OOP, data structures, databases, SQL, APIs, and version control). Crucially, it includes 1-on-1 human technical interviews with experienced software practitioners to evaluate problem-solving thought processes and communication.',
      category: 'education',
    },
    {
      question: 'Can Syneza maintain or refactor an existing software application built by another team?',
      answer:
        'Yes. Many businesses have working systems but lack the internal engineering capacity to address recurring bugs, upgrade frameworks, reduce technical debt, or optimize database queries. We begin with a code and dependency audit, establish automated regression tests, and perform incremental maintenance and refactoring under agreed service windows.',
      category: 'software',
    },
    {
      question: 'How do you prevent hallucinations in business AI and RAG applications?',
      answer:
        'We do not claim that any language model is completely immune to hallucinations. Instead, we architect systems using Retrieval-Augmented Generation (RAG) that restrict answers to authorized company documents, require explicit paragraph-level source citations for every claim, enforce pre-retrieval user access permissions, and configure confidence thresholds so the model explicitly responds "I do not have sufficient information" rather than guessing.',
      category: 'ai',
    },
    {
      question: 'How does Syneza charge for projects and educational programmes?',
      answer:
        'All commercial proposals are custom-scoped. For businesses, we offer fixed-scope milestones, time-boxed discovery assessments, or ongoing maintenance retainers. For educational institutions, programmes are scoped based on batch sizes, engineering branches, and lab scheduling. We provide transparent, itemized proposals before work commences.',
      category: 'general',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="neutral" className="mb-3">
            Common Questions
          </Badge>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {section.heading || 'Frequently Asked Questions'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {section.subtitle ||
              'Clear, unembellished answers about our dual-pillar services, assessment rigor, and commercial models.'}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const contentId = `faq-answer-${idx}`;
            const headerId = `faq-header-${idx}`;

            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden transition-all duration-200"
              >
                <h3>
                  <button
                    id={headerId}
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-slate-900 hover:text-blue-600 focus:outline-none focus:bg-slate-50"
                  >
                    <span className="text-base sm:text-lg pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

