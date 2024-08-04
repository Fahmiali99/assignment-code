import Layout from '@/common/layout'
import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import 'highlight.js/styles/atom-one-dark.css';
import { codeDesc, sampleCode } from '@/utils/psbone';
import CopyClipboard from '@/common/copyclipboard';
import Header from '@/common/header';

function PsbOnePage () {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <Layout>
      <Header title="PSB One | Fahmi"/>
      <div className='w-full'>
        <h1 className=' text-xl md:text-3xl font-bold pt-36 md:pt-44'>Problem Solving Basic - <span className='text-primary'>Test 1</span></h1>
        <div className=' relative'>
          <CopyClipboard code={sampleCode} />
          <pre><code className="language-javascript rounded-xl mt-5 md:mt-10 mb-10">{sampleCode}</code></pre>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-3 gap-4'>
          {codeDesc.map((e, i) => (
            <div key={i}>
              <h2 className='pb-2 font-semibold'>{e.title}</h2>
              <div className='border dark:border-gray-700 rounded-xl h-auto xl:h-56'>
                <pre><code className='language-javascript rounded-xl'>{e.code}</code></pre>
                <p className='px-4 py-6 xl:py-0 mt-0 xl:mt-3 text-gray-500 dark:text-gray-400'>{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default PsbOnePage 