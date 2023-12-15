## Static Analysis

StandardAesEngine.cs

```c#
		private static Stream CreateStream(Stream s, bool bEncrypt, byte[] pbKey, byte[] pbIV)
		{
			StandardAesEngine.ValidateArguments(s, bEncrypt, pbKey, pbIV);

#if KeePassUAP
			return StandardAesEngineExt.CreateStream(s, bEncrypt, pbKey, pbIV);
#else
			SymmetricAlgorithm a = CryptoUtil.CreateAes();
			if(a.BlockSize != 128) // AES block size
			{
				Debug.Assert(false);
				a.BlockSize = 128;
			}
			a.KeySize = 256;
			a.Mode = SaeCipherMode;
			a.Padding = SaePaddingMode;

			ICryptoTransform t;
			if(bEncrypt) t = a.CreateEncryptor(pbKey, pbIV);
			else t = a.CreateDecryptor(pbKey, pbIV);
			if(t == null) { Debug.Assert(false); throw new SecurityException("Unable to create AES transform!"); }

			return new CryptoStreamEx(s, t, bEncrypt ? CryptoStreamMode.Write :
				CryptoStreamMode.Read, a);
#endif
		}

		public Stream EncryptStream(Stream s, byte[] pbKey, byte[] pbIV)
		{
			return StandardAesEngine.CreateStream(s, true, pbKey, pbIV);
		}

		public Stream DecryptStream(Stream s, byte[] pbKey, byte[] pbIV)
		{
			return StandardAesEngine.CreateStream(s, false, pbKey, pbIV);
		}
	}
```
