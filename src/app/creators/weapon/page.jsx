import dynamic from 'next/dynamic';
import Link from 'next/link'
import styles from '@/app/app.module.css';
import { NetworkId, ComponentMap } from '@/config';

const Component = dynamic(() => import('@/components/vm-component'), { ssr: false });

const socialComponents = ComponentMap[NetworkId];

export default function WeaponCreatorComponent() {

  return (
    <>
      <main className=''>
        <div className=''>
          <p>
            Loading components from: &nbsp;
            <code className={styles.code}>{socialComponents.socialDB}</code>
          </p>
        </div>
        <div className=''>
          <h1>Weapon Creator</h1>
          <h2>How to use the Weapon Creator</h2>
          <p>1) Fill out the fields of the creator form</p>
          <p>2) Once you are happy with your creation, click 'Save'</p>
          <p>3) Highlight and copy the data object when the modal pops up</p>
          <p>4) Click 'Save Data' & sign wallet transaction to save your data object on-chain</p>
          <p>5) Click the CID/Hyperfile button to go to Hyperfiles.org</p>
          <p>6) Follow instructions <Link href="https://www.hyperfiles.org/">HERE</Link> if you need help generating your CID or Hyperfile</p>
        </div>
        <div className='row'>
          <div class="col-6">
            <Component src={socialComponents.Weapon} />
          </div>
        </div>
        <hr />

        <div className={styles.grid}>
          
        </div>
      </main>
    </>
  );
}